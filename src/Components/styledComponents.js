import styled from "styled-components";

// --- App
export const AppComponent = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: ${({theme}) => theme.AppComponent};
`
export const AppInner = styled.div`
  height: fit-content;
  width: fit-content;
  margin: auto auto 0;
`
export const Paper = styled.div`
  width: 100%;
  height: 100%;
  margin: 8px;
  padding: 15px;
  position:relative;
  display:flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
  background-color: ${({theme}) => theme.Paper};
  box-shadow: 0 3px 3px -2px rgba(0,0,0,0.2), 
              0px 3px 4px 0px rgba(0,0,0,0.14), 
              0px 1px 8px 0px rgba(0,0,0,0.12);
  border-radius: 4px;
  justify-content: space-between;
`
// --- Toogle
export const ToggleComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  & > span {
    font-size: 12px;
    font-weight: 600;
    color: ${({theme}) => theme.text}
  }
`
export const ToggleOuter = styled.div`
   position: absolute;
   right: 0;
   top: 0;
   padding: 10px;
`
// --- Converter
export const ConverterOuter = styled.div`
  width: 100%;
  height: 100%;
  padding: 25px;
  display:flex;
  align-items: center;
  flex-direction: column;
`
export const ConverterComponent = styled.div`
  height: 200px;
  width: fit-content;
  border: 1px solid #cdcdcd;
  border-radius: 6px;
  padding: 15px;
  display:flex;
  flex-direction: column;
  justify-content: space-around;
`
export const ConverterRow = styled.div`
  display:flex;
  justify-content: space-between;
`

// --- CurrencyRow
export const OpacityComponent = styled.tr`
  .initOpacity {
    transition: all linear 300ms;
  }

  &.triggerOpacityPositive {
    background-color: ${({theme}) => theme.OpacityPositive};
  }

  &.triggerOpacityNegative {
    background-color: ${({theme}) => theme.OpacityNegative};
  }
`
export const Img = styled.img`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  border-radius: 30px;
  transition: transform;
`
export const PriceCellInner = styled.div`
  display:flex;
  align-items: center;
  position: relative;
  padding-left: 18px;
  
  & > span {
      color: ${({theme}) => theme.text}
  }
`
export const ArrowIcon = styled.i`
    position: absolute;
    left: 0;
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    transition: transform ease-in 250ms;
    
    &.up {
        transform: rotate(-135deg);
        border-color: #00bf00;
        -webkit-transform: rotate(-135deg);
    }

    &.down {
        transform: rotate(45deg);
        border-color: #bf0000;
        -webkit-transform: rotate(45deg);
    }
`
// --- CurrencyList
export const CurrencyListComponent = styled.div`
  width: 100%;
  border: 1px solid #cdcdcd;
  border-radius: 6px;
`