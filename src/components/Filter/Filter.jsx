import React, { Component } from "react";
import shortid from "shortid";
import { FilterWrapper, FilterLabel, InputFilterField } from './Filter.styled'


class Filter extends Component {

    filterInputId = shortid.generate()

    onGetFilterValue = (e) => {
      this.props.filterInput(e.currentTarget.value)
    }

    render () {
        return (
            <FilterWrapper>
              <FilterLabel htmlFor={this.filterInputId}>Find contacts by name</FilterLabel>
              <InputFilterField
            id={this.filterInputId}
            onChange={this.onGetFilterValue}
            type="text"
            value={this.props.value}
            name="filter"
            title="Filter by name"
          />
            </FilterWrapper>
        );
};}

export default Filter;
