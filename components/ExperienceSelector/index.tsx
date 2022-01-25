/**
 *
 * ExperienceSelector
 *
 */

import * as THREE from 'three';

import {
  SVGRenderer,
  SVGObject,
} from 'three/examples/jsm/renderers/SVGRenderer';
import { getRandomInt } from '../../lib/math-utils';
import { getRandomFromList } from '../../lib/object-utils';


interface ExperienceSelectorProps {
  width: number
  height: number
}

interface MoveToLocation {
  x: number,
  y: number,
  speed: number,
  stepDistanceX?: number,
  stepDistanceY?: number,
  movingToSelected?: boolean,
  amountOfSteps?: number
}

interface Logo extends SVGObject {
  moveToLocation?: MoveToLocation
}

function ExperienceSelector({width, height}: ExperienceSelectorProps) {
  if (process.browser) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      width / height,
      0.1,
      1000,
    );

    /* @ts-ignore */
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
    ).then((logos: Logo[]) => {
      let isLogoSelected: boolean = false;
      let selectedLogo: Logo;
      let selectedLogoArrived: boolean;

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

function addSVGToScene(resourcePaths: string[], loader: THREE.FileLoader) {
  const promises: Promise<Logo>[] = [];
  resourcePaths.forEach(resourcePath => {
    promises.push(
      new Promise(resolve => {
        loader.load(resourcePath, svg => {
          const node = document.createElementNS('http://www.w3.org/2000/svg', 'g');
          const parser = new DOMParser();
          const doc = parser.parseFromString(svg as string, 'image/svg+xml');
          doc.documentElement.setAttribute('height', '20px');
          doc.documentElement.setAttribute('width', '20px');

          node.appendChild(doc.documentElement);

          node.addEventListener('click', function eventHandler() {
            this.dataset.selected = 'true';
            console.log('clicked');
          });

          const object: Logo = new SVGObject(node) as Logo;
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
function fall(logo: Logo) {
  if (logo.position.y > -400) {
    logo.position.y -= 15;
  }
}

function wanderTo(logo: Logo, moveToLocation?: MoveToLocation, cb?: Function) {
  if (moveToLocation && logo.moveToLocation) {
    if (!logo.moveToLocation.movingToSelected) {
      generateMoveToLocation(
        logo,
        moveToLocation.x,
        moveToLocation.y,
        moveToLocation.speed,
      );
      logo.moveToLocation.movingToSelected = true;
    }

    if (!logo.moveToLocation?.amountOfSteps && cb) {
      cb();
    }
  }

  if (!logo.moveToLocation) {
    generateMoveToLocation(logo);
  }

  if (!logo.moveToLocation?.amountOfSteps) {
    generateMoveToLocation(logo);
  }

  if (logo.moveToLocation && logo.moveToLocation.stepDistanceX 
      && logo.moveToLocation.stepDistanceY && logo.moveToLocation.amountOfSteps) 
  {
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
}

function shiverObject(logo: Logo) {
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

function generateMoveToLocation(logo: Logo, x?: number, y?: number, speed?: number) {
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
