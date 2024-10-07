import {forwardRef, HTMLAttributes, ReactNode} from 'react'
import style from './card.module.scss'
import classNames from 'classnames'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode
    isWhite?: boolean
}

const Card = forwardRef<HTMLDivElement, CardProps>(function CardRef({children, className, isWhite}, ref) {
    const cl = classNames(style['card'], className, {
        [style['card--white']]: isWhite,
    })
    return (
        <div ref={ref} className={cl}>
            {children}
        </div>
    )
})

export default Card
