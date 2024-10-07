import {FC, forwardRef, InputHTMLAttributes} from 'react'
import style from './input.module.scss'
import classNames from 'classnames'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    isWhite?: boolean
}

const Input: FC = forwardRef<HTMLInputElement, InputProps>(function InputRef({isWhite, className, ...props}, ref) {
    const cl = classNames(style['input'], className, {
        [style['input--white']]: isWhite,
    })
    return <input ref={ref} className={cl} {...props} />
})

export default Input
