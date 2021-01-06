import React, {useCallback, useEffect, useState} from "react";
import s from "./Paginator.module.css"

export type PaginatorPropsType = {
    pageSize: number
    totalItemsCount: number
    currentPage: number
    onPageChanged: (pageNumber: number) => void
    portionSize: number
    isFetching: boolean
}

export const Paginator: React.FC<PaginatorPropsType> = React.memo((
    {
        pageSize,
        totalItemsCount,
        currentPage,
        onPageChanged,
        portionSize,
        isFetching
    }) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize)
    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    const portionCount = Math.ceil(pagesCount / portionSize);
    const [portionNumber, setPortionNumber] = useState<number>(1)
    const leftPortionNumber = (portionNumber - 1) * portionSize + 1;
    const rightPortionNumber = portionNumber * portionSize;

    const startPortion = useCallback(() => setPortionNumber(1), [portionNumber])
    const prevPortion = useCallback(() => setPortionNumber(portionNumber - 1), [portionNumber])
    const nextPortion = useCallback(() => setPortionNumber(portionNumber + 1), [portionNumber])
    const endPortion = useCallback(() => setPortionNumber(portionCount), [portionCount])

    return <div className={s.wrapper}>
        <div className={s.paginator}>
            {portionNumber > 1 &&
            <>
                <button onClick={startPortion}>START</button>
                <button onClick={prevPortion}>PREV</button>
            </>}
            {pages
                .filter(p => p >= leftPortionNumber && p <= rightPortionNumber)
                .map(p => {
                    let pageClass = `${s.pages} ${currentPage === p ? s.selectedPage : ''} ${isFetching ? s.isFetching : ''}`
                    return <span
                        key={p}
                        onClick={(e) => onPageChanged(p)}
                        className={pageClass}>
                    {p}
                </span>
                })}
            {portionCount > portionNumber &&
            <>
                <button onClick={nextPortion}>NEXT</button>
                <button onClick={endPortion}>END</button>
            </>}
        </div>
    </div>
})
