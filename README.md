# React.js Card Game Prototype 

### Main Targets of the Project
1. Create/set-up Single Player Game logic and Game loop in React environment using TS/JS,
2. Optimizing React(JSX) for game flow, creating better algorithms applying JS methods, maintain Css animations' quality and speed at high performance levels,
3. Porting Game from Web to mobile using cross platforms example: - React Native -Ionic Capacitor etc...













# Important Notes
> CSS animations are hardware-accelerated, which makes them more efficient than JavaScript-based DOM manipulations. However, JavaScript-based DOM manipulations can be more efficient in some cases, especially when dealing with complex animations or transitions.

> For animations that require smooth transitions, especially when moving objects around the screen, use CSS transform,transition,keyframes, animation and will-change properties. These properties allow the browser to optimize performance by knowing in advance what is going to change.

> Because of React’s declarative nature RequestAnimationFrame(Manuel Dom Manipulation) in combination with useRef for storing game state to create efficient game loops without causing unnecessary renders.

> Optimize re-renders using React.memo, useMemo, and useCallback(For current version of React).