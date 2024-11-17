'use client'

import React, { useRef, useEffect, useState, useCallback } from 'react'
import { Button } from "@/components/ui/button"

export default function Game() {
  const [isRunning, setIsRunning] = useState(false)
  const playerYRef = useRef(150)
  const objectXRef = useRef(400)
  const lastFrameTimeRef = useRef(0)
  const animationFrameId = useRef<number>()
  const keysPressed = useRef<Set<string>>(new Set())

  const gameSpeed = 200 // pixels per second
  const playerSpeed = 200 // pixels per second

  const updateGameState = useCallback((deltaTime: number) => {
    // Update object position
    objectXRef.current -= gameSpeed * deltaTime
    if (objectXRef.current <= 0) objectXRef.current = 400

    // Update player position based on keys pressed
    if (keysPressed.current.has('ArrowUp')) {
      playerYRef.current = Math.max(playerYRef.current - playerSpeed * deltaTime, 0)
    }
    if (keysPressed.current.has('ArrowDown')) {
      playerYRef.current = Math.min(playerYRef.current + playerSpeed * deltaTime, 350)
    }

    // Update DOM
    const playerElement = document.getElementById('player')
    const objectElement = document.getElementById('object')
    if (playerElement) playerElement.style.transform = `translateY(${playerYRef.current}px)`
    if (objectElement) objectElement.style.transform = `translateX(${objectXRef.current}px)`
  }, [])

  const gameLoop = useCallback((currentTime: number) => {
    if (!lastFrameTimeRef.current) lastFrameTimeRef.current = currentTime
    const deltaTime = (currentTime - lastFrameTimeRef.current) / 1000 // convert to seconds
    lastFrameTimeRef.current = currentTime

    updateGameState(deltaTime)

    animationFrameId.current = requestAnimationFrame(gameLoop)
  }, [updateGameState])

  const startGame = useCallback(() => {
    setIsRunning(true)
    lastFrameTimeRef.current = 0
    animationFrameId.current = requestAnimationFrame(gameLoop)
  }, [gameLoop])

  const stopGame = useCallback(() => {
    setIsRunning(false)
    if (animationFrameId.current) {
      cancelAnimationFrame(animationFrameId.current)
    }
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        keysPressed.current.add(e.key)
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        keysPressed.current.delete(e.key)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="relative w-[400px] h-[400px] border border-gray-300 bg-white overflow-hidden">
        <div 
          id="player"
          className="absolute w-[50px] h-[50px] bg-blue-500 left-[50px]"
        />
        <div 
          id="object"
          className="absolute w-[50px] h-[50px] bg-red-500 top-[175px]"
        />
      </div>
      <div className="mt-4">
        <Button onClick={isRunning ? stopGame : startGame} className="mr-2">
          {isRunning ? 'Stop' : 'Start'}
        </Button>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        Use Up and Down arrow keys to move the blue square
      </p>
    </div>
  )
}