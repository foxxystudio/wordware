'use client'

import { useEffect } from 'react'

export default function CustomCursor() {
  useEffect(() => {
    // Create cursor element
    const cursor = document.createElement('div')
    cursor.classList.add('custom-cursor')
    document.body.appendChild(cursor)

    let mouseX = 0
    let mouseY = 0

    // Track mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    // Update cursor position with requestAnimationFrame for smooth movement
    const updateCursorPosition = () => {
      cursor.style.left = `${mouseX}px`
      cursor.style.top = `${mouseY}px`
      requestAnimationFrame(updateCursorPosition)
    }
    requestAnimationFrame(updateCursorPosition)

    // Check if element is a text element
    const isTextElement = (element: HTMLElement): boolean => {
      // Only target specific text content tags, not containers
      const textTags = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'SPAN', 'LI', 'TD', 'TH', 'LABEL']
      const inputTags = ['INPUT', 'TEXTAREA']

      // Check if it's an input or textarea
      if (inputTags.includes(element.tagName)) {
        return true
      }

      if (
        element.classList.contains('split-char') ||
        element.classList.contains('split-line') ||
        element.classList.contains('cursor-trigger')
      ) {
        return true;
      }

      // Check if it's a text element (but not a container)
      if (textTags.includes(element.tagName)) {
        // Make sure it has direct text content (not just child elements)
        const hasDirectText = Array.from(element.childNodes).some(
          node => node.nodeType === Node.TEXT_NODE && (node.textContent?.trim().length ?? 0) > 0
        )
        return hasDirectText
      }

      return false
    }

    // Add hover effect for different element types
    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement

      // Remove all cursor classes first
      cursor.classList.remove('cursor-text')
      cursor.style.height = '' // Reset custom height
      cursor.style.width = '' // Reset custom width
      cursor.style.opacity = '' // Reset opacity

      // Check if target or any parent has cursor-trigger class
      // This handles SVG elements where path children trigger the hover
      const cursorTriggerElement = target.closest('.cursor-trigger') as HTMLElement
      const elementToCheck = cursorTriggerElement || target

      // If cursor-trigger element, hide cursor (opacity 0)
      if (cursorTriggerElement) {
        cursor.style.opacity = '0'
        return
      }

      // Check for text elements
      if (isTextElement(elementToCheck)) {
        cursor.classList.add('cursor-text')

        // Get computed line height of the text element
        const computedStyle = window.getComputedStyle(elementToCheck)
        const lineHeight = computedStyle.lineHeight
        const fontSize = parseFloat(computedStyle.fontSize)

        // Calculate height based on line-height or font-size
        let height = 20 // default
        if (lineHeight !== 'normal') {
          height = parseFloat(lineHeight)
        } else {
          height = fontSize * 1.2 // fallback: font-size * 1.2
        }

        // Set minimum and maximum height
        height = Math.max(16, Math.min(height, 60))

        // Calculate width based on height (taller text = thicker cursor)
        let width = 2 // default
        if (height > 40) {
          width = 4
        } else if (height > 30) {
          width = 3.5
        } else if (height > 24) {
          width = 2.5
        } else {
          width = 1.5
        }

        cursor.style.height = `${height}px`
        cursor.style.width = `${width}px`;
      }
    }

    const handleMouseOut = (e: Event) => {
      cursor.classList.remove('cursor-text')
      cursor.style.height = '' // Reset custom height
      cursor.style.width = '' // Reset custom width
      cursor.style.opacity = '' // Reset opacity
    }

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseout', handleMouseOut)

    // Cleanup
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseout', handleMouseOut)
      if (cursor.parentNode) {
        cursor.parentNode.removeChild(cursor)
      }
    }
  }, [])

  return null
}