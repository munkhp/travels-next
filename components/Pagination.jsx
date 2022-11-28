
const Pagination = ({ page, pages, changePage }) => {
    let middlePagination;
    const transformNumbers = (num) => {
        if (num < 10)
            return '0' + num;
        else return num;
    }
    if (pages <= 5) {
        middlePagination = [...Array(pages)].map((_, idx) => (
            <li key={idx + 1}>
                <button
                    onClick={() => changePage(idx + 1)}
                    className={'btn-pagination ' + ((page === idx + 1) ? 'active' : null)}
                    disabled={page === idx + 1}
                >
                    {transformNumbers(idx + 1)}
                </button>
            </li>
        ));
    } else {
        const startValue = Math.floor((page - 1) / 5) * 5;

        middlePagination = (
            <>
                {[...Array(5)].map((_, idx) => (
                    <li
                        key={startValue + idx + 1}>
                        <button
                            className={'btn-pagination ' + ((page === startValue + idx + 1) ? 'active' : null)}
                            disabled={page === startValue + idx + 1}
                            onClick={() => changePage(startValue + idx + 1)}
                        >
                            {transformNumbers(startValue + idx + 1)}
                        </button>
                    </li>
                ))}
                <li>
                    <button className='btn-pagination'>...</button></li>
                <li>
                    <button className='btn-pagination' onClick={() => changePage(pages)}>{pages}</button>
                </li>
            </>
        );

        if (page > 5) {
            if (pages - page >= 5) {
                middlePagination = (
                    <>
                        <li>
                            <button className='btn-pagination' onClick={() => changePage(1)}>1</button></li>
                        <li>
                            <button className='btn-pagination'>...</button></li>
                        <li>
                            <button className='btn-pagination' onClick={() => changePage(startValue)}>{startValue}</button></li>
                        {[...Array(5)].map((_, idx) => (
                            <li key={startValue + idx + 1}>
                                <button className={'btn-pagination ' + ((page === startValue + idx + 1) ? 'active' : null)}
                                    disabled={page === startValue + idx + 1}
                                    onClick={() => changePage(startValue + idx + 1)}
                                >
                                    {transformNumbers(startValue + idx + 1)}
                                </button>
                            </li>
                        ))}

                        <li>
                            <button className='btn-pagination'>...</button></li>
                        <li>
                            <button className='btn-pagination' onClick={() => changePage(pages)}>{pages}</button></li>
                    </>
                );
            } else {
                let amountLeft = pages - page + 5;
                middlePagination = (
                    <>
                        <li>
                            <button className='btn-pagination' onClick={() => changePage(1)}>1</button></li>
                        <li>
                            <button className='btn-pagination'>...</button></li>
                        <li>
                            <button className='btn-pagination' onClick={() => changePage(startValue)}>{startValue}</button></li>
                        {[...Array(amountLeft)].map((_, idx) => (
                            <li key={startValue + idx + 1}>
                                <button className={'btn-pagination ' + ((page === startValue + idx + 1) ? 'active' : null)}
                                    disabled={page === startValue + idx + 1}
                                    style={
                                        pages < startValue + idx + 1 ? { display: "none" } : null
                                    }
                                    onClick={() => changePage(startValue + idx + 1)}
                                >
                                    {transformNumbers(startValue + idx + 1)}
                                </button>
                            </li>
                        ))}
                    </>
                );
            }
        }
    }

    return (
        pages > 1 && (
            <nav className="pagination-list margin-top70">
                <ul className="pagination">
                    <li>
                        <button
                            className="btn-pagination previous"
                            onClick={() => changePage((page) => page - 1)}
                            disabled={page === 1}
                        >
                            <span aria-hidden="true" className="fa fa-angle-left"></span>
                        </button>
                    </li>
                    {middlePagination}
                    <li>
                        <button
                            className="btn-pagination next"
                            onClick={() => changePage((page) => page + 1)}
                            disabled={page === pages}
                        >
                            <span aria-hidden="true" className="fa fa-angle-right"></span>
                        </button>
                    </li>
                </ul>
            </nav>
        )
    );
};

export default Pagination;