import React from 'react';
import '../Styles/home.css';

import QuickSearchItem from './QuickSearchItem';

class QuickSeach extends React.Component {
    render() {
        const { quickSearchItemsData } = this.props;
        return (
            <div>
                <div className="quicksearch">
                    <p className="quicksearchHeading">
                        Quick Searches
                    </p>
                    <p className="quicksearchSubHeading">
                        Discover restaurants by type of meal
                    </p>

                    <div className="container">
                        <div className="row">
                            {quickSearchItemsData.map((item , index) => {
                                return <QuickSearchItem QSItemData={item} key = {index} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuickSeach;