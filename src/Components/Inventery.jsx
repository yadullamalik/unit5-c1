import { useState } from "react";
import "./Inventery.css";

export const Inventery = () => {
  const [books, setBooks] = useState(13);
  const [pens, setPens] = useState(10);
  const [notebooks, setNotebooks] = useState(44);
  const [incpens, setIncpens] = useState(78);
  let total = 0;

  const handleBooks = (value) => {
    setBooks(books + value);
  };
  const handlePens = (value) => {
    setPens(pens + value);
  };
  const handleNoteBooks = (value) => {
    setNotebooks(notebooks + value);
  };
  const handleIncpens = (value) => {
    setIncpens(incpens + value);
  };
  total = total + books + pens + notebooks + incpens;
  return (
    <div className="box">
      <div className="items">
        <span>Books:</span>
        <button
          className="addBook"
          onClick={() => {
            handleBooks(1);
          }}
        >
          +
        </button>
        <button
          className="remBook"
          onClick={() => {
            handleBooks(-1);
          }}
        >
          -
        </button>
        <span className="totalBooks">{books}</span>
      </div>
      <div className="items">
        <span>Pens:</span>
        <button
          className="addPen"
          onClick={() => {
            handlePens(1);
          }}
        >
          +
        </button>
        <button
          className="remPen"
          onClick={() => {
            handlePens(-1);
          }}
        >
          -
        </button>
        <span className="totalPens">{pens}</span>
      </div>
      <div className="items">
        <span>Notebooks:</span>
        <button
          className="addNotebook"
          onClick={() => {
            handleNoteBooks(1);
          }}
        >
          +
        </button>
        <button
          className="remNotebook"
          onClick={() => {
            handleNoteBooks(-1);
          }}
        >
          -
        </button>
        <span className="totalNotebooks">{notebooks}</span>
      </div>
      <div className="items">
        <span>InkPens:</span>
        <button
          className="addInkpen"
          onClick={() => {
            handleIncpens(1);
          }}
        >
          +
        </button>
        <button
          className="remInkpen"
          onClick={() => {
            handleIncpens(-1);
          }}
        >
          -
        </button>
        <span className="totalInkpens">{incpens}</span>
      </div>
      <div className="total">{total}</div>
    </div>
  );
};
