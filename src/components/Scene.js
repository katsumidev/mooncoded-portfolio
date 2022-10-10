import React, { Suspense } from "react";
import { Moon } from "./Moon";
import { StarDustCrusaders } from "./StarDustCrusaders";

// import { Container } from './styles';

function Scene() {
  return (
    <Suspense>
      <>
        <group>
          <StarDustCrusaders count={8000} />
        </group>
      </>
    </Suspense>
  );
}

export default Scene;
