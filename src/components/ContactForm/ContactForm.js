import { Component } from 'react';
import PropTypes from 'prop-types';
import s from './ContactForm.module.css';

 class contactForm extends Component {
  state = {
    name: '',
    number: '',
  };


  handleChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  contactValidation = () => {
    const { name, number } = this.state;
    const { contacts } = this.props;

    if (contacts.find(contact => name === contact.name)) {
      alert(`${name} is already in contacts`);
      return true;
    }

    if (name === '' || number === '') {
      alert('Please enter all data');
      return true;
    }
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;

    if (this.contactValidation()) {
      return;
    }

    this.props.onSubmit(name, number);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
    <div className={s.container}>
      <form onSubmit={this.handleSubmit} className={s.form}>
        <label className={s.label}>
          Name
          <input
           className={s.input}
            type="text"
            name="name"
            value={this.state.name}
            placeholder="Сontact name"
            onChange={this.handleChange}
            className={s.input}
          />
        </label>

        <label className={s.label}>
          Number
          <input  
            className={s.input}
            type="tel"
            name="number"
            value={this.state.number}
            placeholder="Сontact number"
            onChange={this.handleChange}
            className={s.input}
          />
        </label>
        <button type="submit" className={s.button}>
          Add contact
        </button>
      </form>
    </div>
    );
  }
}

contactForm.propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        onSubmit: PropTypes.func.isRequired,
      }),
    ),
  };
export default contactForm;