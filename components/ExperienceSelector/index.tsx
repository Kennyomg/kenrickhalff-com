/**
 *
 * ExperienceSelector
 *
 */

import { useRef } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import * as THREE from 'three';
// import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader';

import {
  SVGRenderer,
  SVGObject,
} from 'three/examples/jsm/renderers/SVGRenderer';
// import { node } from 'prop-types';

// import image from 'file-loader?name=[name].[ext]!../../images/logos/angular.svg';

function ExperienceSelector({width, height}) {
  if (process.browser) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000,
    );

    const renderer = new SVGRenderer({ alpha: true });
    const fileLoader = new THREE.FileLoader();
    scene.background = new THREE.Color(0xf0f0f0);

    renderer.setSize(width, height);

    // use ref as a mount point of the Three.js scene instead of the document.body
    // mount.appendChild(renderer.domElement);

    // const geometry = new THREE.BoxGeometry(1, 1, 1);
    // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    // const cube = new THREE.Mesh(geometry, material);
    addSVGToScene(
      [
        '/logos/angular.svg',
        '/logos/cpp.svg',
        '/logos/csharp.svg',
        '/logos/css3.svg',
        '/logos/django.svg',
        '/logos/flask.svg',
        '/logos/go.svg',
        '/logos/html5.svg',
        '/logos/java.svg',
        '/logos/javascript.svg',
        '/logos/jquery.svg',
        '/logos/magento.svg',
        '/logos/nodejs.svg',
        '/logos/phalcon.svg',
        '/logos/php.svg',
        '/logos/python.svg',
        '/logos/rails.svg',
        '/logos/react.svg',
        '/logos/ruby.svg',
        '/logos/rust.svg',
        '/logos/sfml.svg',
        '/logos/sql.svg',
        '/logos/typescript.svg',
        '/logos/unity3d.svg',
        '/logos/vue.svg',
        '/logos/wordpress.svg',
      ],
      fileLoader,
    ).then(result => {
      const logos = result;
      let isLogoSelected = false;
      let selectedLogo;
      let selectedLogoArrived;

      logos.forEach(logo => {
        scene.add(logo);
      });

      camera.position.z = 500;
      renderer.render(scene, camera);
      const animate = () => {
        if (!selectedLogoArrived) {
          requestAnimationFrame(animate);
        }

        logos.forEach(logo => {
          if (logo.node.dataset.selected) {
            console.log('selected');
            isLogoSelected = true;
            selectedLogo = logo;
          }

          if (isLogoSelected && selectedLogo !== logo) {
            fall(logo);
          } else if (selectedLogo === logo) {
            wanderTo(logo, { x: -300, y: 300, speed: 3 }, () => {
              selectedLogoArrived = true;
            });
          } else {
            wanderTo(logo);
          }
        });

        renderer.render(scene, camera);
      };
      animate();
    });


    console.log(renderer.domElement)
    return <div>{renderer.domElement}</div>
  }
  return <></>
}

export default ExperienceSelector;

function addSVGToScene(resourcePaths, loader) {
  const promises = [];
  resourcePaths.forEach(resourcePath => {
    promises.push(
      new Promise(resolve => {
        loader.load(resourcePath, svg => {
          const node = document.createElementNS('http://www.w3.org/2000/svg', 'g');
          const parser = new DOMParser();
          const doc = parser.parseFromString(svg, 'image/svg+xml');
          doc.documentElement.setAttribute('height', '20px');
          doc.documentElement.setAttribute('width', '20px');

          node.appendChild(doc.documentElement);

          node.addEventListener('click', function eventHandler() {
            this.dataset.selected = true;
            console.log('clicked');
          });

          const object = new SVGObject(node);
          object.position.x = getRandomInt(
            (600 / 2) * -1,
            600 / 2,
          );
          object.position.y = getRandomInt(
            (200 / 2) * -1,
            200 / 2,
          );

          console.log(object);

          resolve(object);
        });
      }),
    );
  });

  return Promise.all(promises);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomFromList(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function fall(logo) {
  if (logo.position.y > -400) {
    logo.position.y -= 15;
  }
}

function wanderTo(logo, moveToLocation, cb) {
  if (moveToLocation) {
    if (!logo.moveToLocation.movingToSelected) {
      generateMoveToLocation(
        logo,
        moveToLocation.x,
        moveToLocation.y,
        moveToLocation.speed,
      );
      logo.moveToLocation.movingToSelected = true;
    }

    if (!logo.moveToLocation.amountOfSteps) {
      cb();
    }
  }

  if (!logo.moveToLocation) {
    generateMoveToLocation(logo);
  }

  if (!logo.moveToLocation.amountOfSteps) {
    generateMoveToLocation(logo);
  }

  if (logo.position.x < logo.moveToLocation.x) {
    logo.position.x += logo.moveToLocation.stepDistanceX;
  } else if (logo.position.x > logo.moveToLocation.x) {
    logo.position.x -= logo.moveToLocation.stepDistanceX;
  }

  if (logo.position.y < logo.moveToLocation.y) {
    logo.position.y += logo.moveToLocation.stepDistanceY;
  } else if (logo.position.y > logo.moveToLocation.y) {
    logo.position.y -= logo.moveToLocation.stepDistanceY;
  }

  logo.moveToLocation.amountOfSteps -= 1;
}

function shiverObject(logo) {
  if (logo.position.x >= -400 && logo.position.x <= 400) {
    if (Math.round(Math.random())) {
      logo.position.x += Math.random();
    } else {
      logo.position.x -= Math.random();
    }
  } else {
    if (logo.position.x < -400) {
      logo.position.x += Math.random();
    }

    if (logo.position.x > 400) {
      logo.position.x -= Math.random();
    }
  }

  if (logo.position.y <= 400 && logo.position.y >= -400) {
    if (Math.round(Math.random())) {
      logo.position.y += Math.random();
    } else {
      logo.position.y -= Math.random();
    }
  } else {
    if (logo.position.y > 400) {
      logo.position.y -= Math.random();
    }

    if (logo.position.y < -400) {
      logo.position.y += Math.random();
    }
  }
}

function generateMoveToLocation(logo, x, y, speed) {
  logo.moveToLocation = {
    x:
      x ||
      getRandomInt(
        (600 / 2) * -1,
        (200) / 2,
      ),
    y: y || getRandomInt((200 / 2) * -1, 200 / 2),
    speed: speed || getRandomFromList([1]),
  }

  const xDistance = Math.abs(logo.position.x - logo.moveToLocation.x);
  const yDistance = Math.abs(logo.position.y - logo.moveToLocation.y);

  logo.moveToLocation.amountOfSteps = Math.round( ( Math.sqrt(
    Math.pow(xDistance, 2) +
    Math.pow(yDistance, 2)
  ) ) / logo.moveToLocation.speed);

  logo.moveToLocation.stepDistanceX =
    xDistance / logo.moveToLocation.amountOfSteps;
  logo.moveToLocation.stepDistanceY =
    yDistance / logo.moveToLocation.amountOfSteps;
}
