import React from 'react'
import style from './Pagination.module.css'
import rightarr from '../../images/rightarr.svg'
import leftarr from '../../images/leftarr.svg'


const Pagenation = ({ goToCurrentPage, prevPage, nextPage, page }) => {
    const pages = [1, 2, 3, 4, 5, 6,7,8,9,10]


    return (
        <>
            <div className={style.buttons}>
                <button id={style.prev} onClick={prevPage} disabled={page === 1}>
                    <img src={leftarr} alt="leftarr" />

                </button>
                {pages.map((res, ind) => {
                    return (
                        <div>
                            <button className={style.button} key={ind} id={page === res ? style.active : ""}
                                onClick={() => goToCurrentPage(res)}>
                                {res}
                            </button>

                        </div>
                    )
                })}
                <button id={style.next} onClick={nextPage} disabled={page === 10}>
                    <img src={rightarr} alt="rightarr" />

                </button>
            </div>
        </>
    )
}

export default Pagenation