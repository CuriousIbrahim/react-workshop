import "./Form.css";

export function Form(props) {
    return (
        <form className="Form" onSubmit={props.onSubmit}>
          <input type="text" value={props.word} onChange={props.onChange} name="word" />
          <input type="submit" value="Search" />
        </form>
    )
}