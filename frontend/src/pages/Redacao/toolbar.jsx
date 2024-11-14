import { useState, useRef } from 'react';
import styled from 'styled-components';
import {
  FaBold,
  FaItalic,
  FaUnderline,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaAlignJustify,
  FaUndo,
  FaRedo
} from 'react-icons/fa';
import { BiMinus, BiPlus, BiImage, BiPalette } from 'react-icons/bi';

const ToolbarContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Permite que os itens quebrem linha em dispositivos móveis */
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  background-color: #fff;
  border-radius: 25px;
  gap: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  margin: 0 auto 16px auto;
  width: 90%;

  /* Ajuste para telas menores */
  @media (max-width: 768px) {
    padding: 8px;
    gap: 6px;
    justify-content: center; /* Centraliza os itens na tela menor */
  }
`;

const ToolbarButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: #333;
  padding: 6px;
  border-radius: 4px;
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  /* Ajuste de tamanho para telas menores */
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 4px;
  }
`;

const FontSelector = styled.select`
  font-size: 14px;
  padding: 4px 6px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  cursor: pointer;
  outline: none;

  /* Ajuste de tamanho para telas menores */
  @media (max-width: 768px) {
    font-size: 12px;
    padding: 2px 4px;
  }
`;

const FontSizeSelector = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 2px;

  /* Ajuste de tamanho para telas menores */
  @media (max-width: 768px) {
    padding: 1px;
  }
`;

const FontSizeInput = styled.input`
  width: 35px;
  text-align: center;
  border: none;
  outline: none;
  font-size: 14px;
  margin: 0 2px;

  /* Ajuste de tamanho para telas menores */
  @media (max-width: 768px) {
    width: 30px;
    font-size: 12px;
  }
`;

const Separator = styled.div`
  width: 1px;
  height: 20px;
  background-color: #ddd;
  margin: 0 4px;

  /* Ajuste para telas menores */
  @media (max-width: 768px) {
    height: 15px;
    margin: 0 2px;
  }
`;

const TextContainerWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10px;
`;

const TextContainer = styled.div`
  font-family: ${({ fontFamily }) => fontFamily};
  font-size: ${({ fontSize }) => fontSize}px;
  line-height: ${({ lineHeight }) => lineHeight};
  text-align: ${({ textAlign }) => textAlign};
  color: ${({ textColor }) => textColor};
  ${({ isBold }) => isBold && 'font-weight: bold;'}
  ${({ isItalic }) => isItalic && 'font-style: italic;'}
  ${({ isUnderline }) => isUnderline && 'text-decoration: underline;'}
  height: 1095px;
  width: 80%;
  padding: 16px;
  background-color: #fff;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  border-radius: 8px;
  outline: none;
  overflow-y: scroll;

  /* Ajuste para telas menores */
  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
    font-size: ${({ fontSize }) => fontSize - 2}px; /* Diminui ligeiramente o tamanho da fonte */
  }
`;

// eslint-disable-next-line react/prop-types
const Toolbar = ({ content }) => {
  const [textStyles, setTextStyles] = useState({
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 1.5,
    isBold: false,
    isItalic: false,
    isUnderline: false,
    textAlign: 'left',
    textColor: '#000',
  });

  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const textRef = useRef();

  const saveHistory = () => {
    setHistory((prevHistory) => [...prevHistory, { ...textStyles }]);
    setRedoStack([]); // Limpa o redo stack ao fazer uma nova alteração
  };

  const toggleStyle = (style) => {
    saveHistory();
    setTextStyles((prevStyles) => ({
      ...prevStyles,
      [style]: !prevStyles[style],
    }));
  };

  const changeFontFamily = (e) => {
    saveHistory();
    setTextStyles((prevStyles) => ({
      ...prevStyles,
      fontFamily: e.target.value,
    }));
  };

  const changeFontSize = (sizeChange) => {
    saveHistory();
    setTextStyles((prevStyles) => ({
      ...prevStyles,
      fontSize: Math.max(8, prevStyles.fontSize + sizeChange),
    }));
  };

  const handleFontSizeChange = (e) => {
    const newSize = parseInt(e.target.value, 10);
    if (!isNaN(newSize) && newSize >= 8) {
      saveHistory();
      setTextStyles((prevStyles) => ({
        ...prevStyles,
        fontSize: newSize,
      }));
    }
  };

  const changeTextAlign = (alignment) => {
    saveHistory();
    setTextStyles((prevStyles) => ({
      ...prevStyles,
      textAlign: alignment,
    }));
  };

  const handleColorChange = (e) => {
    const newColor = e.target.value;
    setColorPickerVisible(false);
    saveHistory();
    setTextStyles((prevStyles) => ({
      ...prevStyles,
      textColor: newColor,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      alert(`Imagem "${file.name}" carregada com sucesso!`);
    }
  };

  const handleUndo = () => {
    if (history.length > 0) {
      const lastState = history.pop();
      setRedoStack((prevRedo) => [textStyles, ...prevRedo]);
      setTextStyles(lastState);
      setHistory([...history]);
    }
  };

  const handleRedo = () => {
    if (redoStack.length > 0) {
      const nextState = redoStack.shift();
      setHistory((prevHistory) => [...prevHistory, textStyles]);
      setTextStyles(nextState);
      setRedoStack([...redoStack]);
    }
  };

  return (
    <div>
      <ToolbarContainer>
        <ToolbarButton onClick={handleUndo}><FaUndo /></ToolbarButton>
        <ToolbarButton onClick={handleRedo}><FaRedo /></ToolbarButton>
        <Separator />
        <FontSelector onChange={changeFontFamily} value={textStyles.fontFamily}>
          <option value="Roboto">Roboto</option>
          <option value="Arial">Arial</option>
          <option value="Georgia">Georgia</option>
          <option value="Comfortaa">Comfortaa</option>
        </FontSelector>
        <Separator />
        <ToolbarButton onClick={() => toggleStyle('isBold')}><FaBold /></ToolbarButton>
        <ToolbarButton onClick={() => toggleStyle('isItalic')}><FaItalic /></ToolbarButton>
        <ToolbarButton onClick={() => toggleStyle('isUnderline')}><FaUnderline /></ToolbarButton>
        <Separator />
        <FontSizeSelector>
          <ToolbarButton onClick={() => changeFontSize(-1)}><BiMinus /></ToolbarButton>
          <FontSizeInput type="number" value={textStyles.fontSize} onChange={handleFontSizeChange} />
          <ToolbarButton onClick={() => changeFontSize(1)}><BiPlus /></ToolbarButton>
        </FontSizeSelector>
        <Separator />
        <ToolbarButton onClick={() => changeTextAlign('left')}><FaAlignLeft /></ToolbarButton>
        <ToolbarButton onClick={() => changeTextAlign('center')}><FaAlignCenter /></ToolbarButton>
        <ToolbarButton onClick={() => changeTextAlign('right')}><FaAlignRight /></ToolbarButton>
        <ToolbarButton onClick={() => changeTextAlign('justify')}><FaAlignJustify /></ToolbarButton>
        <Separator />
        <input type="color" style={{ display: colorPickerVisible ? 'inline' : 'none' }} onChange={handleColorChange} />
        <ToolbarButton onClick={() => setColorPickerVisible(!colorPickerVisible)}><BiPalette /></ToolbarButton>
        <ToolbarButton as="label">
          <BiImage />
          <input type="file" accept="image/*" style={{ display: 'none' }} onChange={handleImageUpload} />
        </ToolbarButton>
      </ToolbarContainer>
      <TextContainerWrapper>
        <TextContainer
          contentEditable
          ref={textRef}
          {...textStyles}
        >
          {content}
        </TextContainer>
      </TextContainerWrapper>
    </div>
  );
};

export default Toolbar;