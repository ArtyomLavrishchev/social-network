import React from "react";
import s from "./Paginator.module.css"

export type PaginatorPropsType = {
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
}

export const Paginator = (props: PaginatorPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++)
        pages.push(i)


    return <div className={s.wrapper}>
        {pages.map(p => {
            let pageClass = `${s.pages} ${props.currentPage === p ? s.selectedPage: ''}`
            return <span
                onClick={((e) => props.onPageChanged(p))}
                className={pageClass}>
                    {p}
                </span>
        })}
    </div>
}
