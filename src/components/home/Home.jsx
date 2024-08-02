import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import 'matter-attractors';
import 'matter-wrap';
import './Home.css';

import Social from './Social';
import Data from './Data';
import Scroll from './Scroll';
import { Spotlight } from '../ui/SpotLight';
import shape1 from '../../assets/shape-1.png';
import shape2 from '../../assets/shape-2.png';

const Home = () => {
  const wrapperRef = useRef(null);
  const dimensions = useRef({ width: window.innerWidth, height: window.innerHeight });

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = document.createElement('canvas');
    wrapper.appendChild(canvas);

    Matter.use('matter-attractors');
    Matter.use('matter-wrap');

    const runMatter = () => {
      const { Engine, Events, Runner, Render, World, Body, Mouse, Common, Bodies } = Matter;

      const engine = Engine.create();
      engine.world.gravity.y = 0;
      engine.world.gravity.x = 0;
      engine.world.gravity.scale = 0.1;

      const render = Render.create({
        element: wrapper, // Use the wrapper element
        canvas: canvas, // Explicitly use the created canvas element
        engine: engine,
        options: {
          showVelocity: false,
          width: dimensions.current.width,
          height: dimensions.current.height,
          wireframes: false,
          background: 'transparent',
        },
      });

      const runner = Runner.create();
      const world = engine.world;
      world.gravity.scale = 0;

      const attractiveBody = Bodies.circle(
        render.options.width / 2,
        render.options.height / 2,
        Math.max(dimensions.current.width / 25, dimensions.current.height / 25) / 2,
        {
          render: {
            fillStyle: `#000`,
            strokeStyle: `#000`,
            lineWidth: 0,
          },
          isStatic: true,
          plugin: {
            attractors: [
              (bodyA, bodyB) => {
                return {
                  x: (bodyA.position.x - bodyB.position.x) * 1e-6,
                  y: (bodyA.position.y - bodyB.position.y) * 1e-6,
                };
              },
            ],
          },
        }
      );

      World.add(world, attractiveBody);

      for (let i = 0; i < 60; i += 1) {
        const x = Common.random(0, render.options.width);
        const y = Common.random(0, render.options.height);
        const s = Common.random() > 0.6 ? Common.random(10, 80) : Common.random(4, 60);
        const poligonNumber = Common.random(3, 6);

        const body = Bodies.polygon(x, y, poligonNumber, s, {
          mass: s / 20,
          friction: 0,
          frictionAir: 0.02,
          angle: Math.round(Math.random() * 360),
          render: {
            fillStyle: '#222222',
            strokeStyle: `#000000`,
            lineWidth: 2,
          },
        });

        World.add(world, body);

        const r = Common.random(0, 1);

        const circle1 = Bodies.circle(x, y, Common.random(2, 8), {
          mass: 0.1,
          friction: 0,
          frictionAir: 0.01,
          render: {
            fillStyle: r > 0.3 ? `#27292d` : `#444444`,
            strokeStyle: `#000000`,
            lineWidth: 2,
          },
        });

        World.add(world, circle1);

        const circle2 = Bodies.circle(x, y, Common.random(2, 20), {
          mass: 6,
          friction: 0,
          frictionAir: 0,
          render: {
            fillStyle: r > 0.3 ? `#334443` : `#222222`,
            strokeStyle: `#111111`,
            lineWidth: 4,
          },
        });

        World.add(world, circle2);

        const circle3 = Bodies.circle(x, y, Common.random(2, 30), {
          mass: 0.2,
          friction: 0.6,
          frictionAir: 0.8,
          render: {
            fillStyle: `#191919`,
            strokeStyle: `#111111`,
            lineWidth: 3,
          },
        });

        World.add(world, circle3);
      }

      const mouse = Mouse.create(render.canvas);
      const mouseConstraint = Matter.MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

      World.add(world, mouseConstraint);

      Events.on(engine, 'afterUpdate', () => {
        if (!mouse.position.x) return;

        Body.translate(attractiveBody, {
          x: (mouse.position.x - attractiveBody.position.x) * 0.12,
          y: (mouse.position.y - attractiveBody.position.y) * 0.12,
        });
      });

      Runner.run(runner, engine);
      Render.run(render);

      return { engine, runner, render };
    };

    const handleResize = () => {
      dimensions.current = { width: window.innerWidth, height: window.innerHeight };
      m.render.canvas.width = window.innerWidth;
      m.render.canvas.height = window.innerHeight;
    };

    const debounce = (func, wait, immediate) => {
      let timeout;
      return function () {
        const context = this,
          args = arguments;
        const later = () => {
          timeout = null;
          if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
      };
    };

    let m = runMatter();
    window.addEventListener('resize', debounce(handleResize, 250));

    return () => {
      window.removeEventListener('resize', debounce(handleResize, 250));
      Matter.Render.stop(m.render);
      Matter.Runner.stop(m.runner);
      Matter.World.clear(m.engine.world);
      Matter.Engine.clear(m.engine);
      wrapper.removeChild(canvas); // Remove the canvas on cleanup
    };
  }, []);

  return (
    <section className="home section relative" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <div className="home__img"></div>

          <Data />
        </div>

        <Scroll />

        <img src={shape1} alt="" className="shape shape-1" />
        <img src={shape2} alt="" className="shape shape-2" />
        <img src={shape2} alt="" className="shape shape-3" />
      </div>

      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />

      <div ref={wrapperRef} id="wrapper-canvas" className="canvas-container"></div>
    </section>
  );
};

export default Home;
