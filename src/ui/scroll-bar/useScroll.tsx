import {TouchEvent, useEffect, useRef, useState, DragEvent, WheelEvent} from 'react'
import {ScrollBarProps} from './scroll-bar'

const useScroll = ({
    initScroll = 0,
    onToScroll,
    os = 'X',
    valueScrool = 16,
}: Omit<ScrollBarProps, 'onTransitionEnd'>) => {
    const refBar = useRef<HTMLDivElement>(null)
    const refWrapp = useRef<HTMLDivElement>(null)
    const [scroll, setScroll] = useState<number>(initScroll)
    const refTouch = useRef({
        isMove: false,
        prev: 0,
    })
    const hendalScroll = ({deltaY}: WheelEvent<HTMLDivElement>) => {
        if (valueScrool === 0) return
        toScroll(deltaY / 100)
    }
    const toScroll = (direction: number) => {
        setScroll((prev) => {
            let newValue = prev + direction * valueScrool
            const maxValue = refWrapp.current!.clientWidth - refBar.current!.clientWidth
            console.log(refWrapp.current!.clientWidth)
            console.log(refBar.current!.clientWidth)
            if (newValue < 0) newValue = 0
            if (newValue > maxValue) newValue = maxValue
            if (onToScroll) onToScroll({direction, scroll: newValue, setScroll, maxValue})

            return newValue
        })
    }
    const hendalTouch = (e: TouchEvent<HTMLDivElement>) => {
        if (valueScrool === 0) return
        if (e.touches[0][`client${os}`] < refTouch.current.prev) toScroll(1)
        if (e.touches[0][`client${os}`] > refTouch.current.prev) toScroll(-1)
        refTouch.current.prev = e.touches[0][`client${os}`]
    }
    const handalDragStart = () => {
        refTouch.current.isMove = true
    }
    const handalDragEnd = () => {
        refTouch.current.isMove = false
    }
    const handalDrag = (e: DragEvent<HTMLDivElement>) => {
        if (valueScrool === 0 || !refTouch.current.isMove) return
        if (e[`client${os}`] < refTouch.current.prev) toScroll(1)
        if (e[`client${os}`] > refTouch.current.prev) toScroll(-1)
        refTouch.current.prev = e[`client${os}`]
    }

    useEffect(() => {
        setScroll(initScroll)
    }, [initScroll])

    return {
        refBar,
        refWrapp,
        scroll,
        handalDrag,
        handalDragStart,
        handalDragEnd,
        hendalScroll,
        hendalTouch,
    }
}

export default useScroll
