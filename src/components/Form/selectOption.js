import React from 'react'
import styled from 'styled-components'
import Scrollbar from 'react-custom-scrollbars'

const StyledSelectBox = styled.div`
    position: relative;
`;

const BoxContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    padding: 1.6rem;

    box-sizing: border-box;
    border: 1px solid #c8c8c8;
    
    background: white;
    font-size: 1.6rem;
    color: gray;
    font-weight: 300;
`;

const SelectedItem = styled.div`
    display: inline-block;
    height: 100%;
    width: 100%;
    vertical-align: middle;
`;

const StyledArrow = styled.div`
    width: 3rem;
    height: 3rem;
    margin: 0;
    padding: 0;
    display: inline-block;
    position: absolute;
    right: 1rem;

    .select-box--arrow-down {
        position: absolute;
        top: 1.2rem;
        left: 0.8rem;
        width: 0; 
        height: 0; 
        border-left: 0.8rem solid transparent;
        border-right: 0.8rem  solid transparent;
        border-top: 1rem solid #46abd7;
    }
    
    .select-box--arrow-up {
        position: absolute;
        top: 1rem;
        left: 0.8rem;
        width: 0; 
        height: 0; 
        border-left: 0.8rem solid transparent;
        border-right: 0.8rem solid transparent;
        border-bottom: 1rem solid #46abd7;
    }
`;

const Items = styled.div`
    width: 99.5%;
    position: absolute;
    z-index: 3;
    border: 1px solid #c8c8c8;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
`;

const Item = styled.div`
    padding: 1.6rem;
    background: white;
    color: gray;
    font-weight: 100;
    :last-child{
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
    }
    :hover {
        background-color: #e4f5fc;
        color: #173f81;
        font-weight: 100;
        cursor: pointer;
    }

`;

class SelectBox extends React.Component {
  state = {
    items: this.props.items || [],
    showItems: false,
    selectedItem: this.props.items[0] || this.props.selectedItem,
  }

  dropDown = () => {
    this.setState(prevState => ({
      showItems: !prevState.showItems
    }))
  }

  selectItem = (item) => {
    this.setState({
      selectedItem: item,
      showItems: false,
    })
  }

  render() {
    return (
        <>
            <StyledSelectBox>
                <BoxContainer>
                    <SelectedItem>
                        { this.state.selectedItem.value }
                    </SelectedItem>
                    <StyledArrow onClick={this.dropDown}>
                        <span className={`${this.state.showItems ? 'select-box--arrow-up' : 'select-box--arrow-down'}`}/>
                    </StyledArrow>
                </BoxContainer>
                <Scrollbar style={ {width: '100%', height: '21rem'} }>
                    <Items
                        style={{display: this.state.showItems ? 'block' : 'none'}}>
                        {
                            this.state.items.map(item => 
                                <Item key={item.id} onClick={() => this.selectItem(item)}>
                                    { item.value }
                                </Item>)
                        }
                    </Items>
                </Scrollbar>
            </StyledSelectBox>
            <input type="hidden" name={this.state.name} value={this.state.selectedItem.id} />
        </>
    )
  }
}

export default SelectBox