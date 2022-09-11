// Here is a link to where I learned about this: https://www.w3schools.com/react/react_forms.asp
function Form() {
  return (
    <form>
      {/* need to bootsrap this section so that words are not on the edge */}
      <label>Enter your name:
        <input type="text" />
      </label>
      <button>
        Search
      </button>
      <br></br><br></br>
      <label>Enter your name:
        <input type="text" />
      </label>
      <button>
        Search
      </button>
      <br></br>
      {/* https://www.newline.co/@andreeamaco/react-dropdown-tutorial-for-beginners-create-a-dropdown-menu-from-scratch--9831d197 */}
      <select name="selectList" id="selectList">
        <option value="option 1">Option 1</option>
        <option value="option 2">Option 2</option>
      </select>
    </form>
  )
}

export default Form;

// Not sure if I need a ReactDOM thing - will look into
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<MyForm />);




