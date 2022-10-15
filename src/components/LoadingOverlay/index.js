import React from 'react';

import { Transition, Moon, Letter, Orbit, OrbitObject } from './styles';

function LoadingOverlay({loading}) {
  return (
    <Transition>
        <Letter>M</Letter>
        <Moon>
          <Orbit>
            <OrbitObject />
          </Orbit>
        </Moon>
        <Letter>N</Letter>
      </Transition>
  );
}

export default LoadingOverlay;