import {forwardRef} from 'react'
import style from './flip-card.module.scss'
import classNames from 'classnames'
import Card from '@/ui/card'

interface FlipCardProps {
    children: [JSX.Element, JSX.Element]
}

const FlipCard = forwardRef<HTMLDivElement, FlipCardProps>(function FlipCardRef({children}, ref) {
    return (
        <div ref={ref} className={classNames(style['cube_wrapper'])}>
            <div className={classNames(style['cube'])}>
                <Card className={classNames(style['cube__side'], style['cube__side--front'])} isWhite>
                    {children[0]}
                </Card>
                <Card className={classNames(style['cube__side'], style['cube__side--right'])}>{children[1]}</Card>
            </div>
        </div>
    )
})

export default FlipCard
