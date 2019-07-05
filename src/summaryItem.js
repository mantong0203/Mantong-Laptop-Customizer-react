import React from 'react';

export default function summaryItem(props){
    return (
            <div className="summary__option__label">
            <div className="summary__option__label">{props.id}  </div>
            <div className="summary__option__value">{props.selected[props.id].name}</div>
            <div className="summary__option__cost">
              { new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD'})
                  .format(this.state.selected[props.id].cost) }
            </div>
        </div>
    )    
}