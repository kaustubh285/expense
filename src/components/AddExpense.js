import React, { Component } from "react";
import { Button, FormControl } from "@material-ui/core";
import AddCircleTwoToneIcon from "@material-ui/icons/AddCircleTwoTone";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default class AddExpense extends Component {
  constructor() {
    super();
    this.state = {
      amt: "",
      amtType: "Expense",
      amtDate: "",

      amtNotes: "",
      displayForm: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleAddSubmit = this.handleAddSubmit.bind(this);
    this.handleAddSubmit = this.toggleForm.bind(this);
  }

  toggleForm() {
    this.setState({
      displayForm: !this.state.displayForm,
    });
  }

  handleAddSubmit(e) {
    e.preventDefault();
    let newAptmt = {
      amt: this.state.amt,
      amtType: this.state.amtType,
      amtDate: this.state.amtDate,
      amtNotes: this.state.amtNotes,
    };

    // this.props.addAppointment(newAptmt);

    this.setState({
      amt: "",
      amtType: "",
      amtDate: "",
      amtNotes: "",
    });

    this.toggleForm();
  }

  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const nname = target.name;
    this.setState({
      [nname]: value,
    });
  }

  render() {
    const useStyles = makeStyles((theme) => ({
      button: {
        margin: theme.spacing(1),
      },
    }));
    return (
      <div
        className={
          "card textcenter mt-3 " +
          (this.state.displayForm ? "" : "add-appointment")
        }>
        <Typography component='div' variant='body1' className='apt-addheading'>
          <Box bgcolor='primary.main' color='primary.contrastText' p={2}>
            <Button
              variant='contained'
              color='default'
              className={useStyles.button}
              startIcon={<AddCircleTwoToneIcon />}
              onClick={() => {
                this.toggleForm();
              }}>
              Make an entry
            </Button>
          </Box>
        </Typography>

        <div className='card-body'>
          <form id='aptForm' noValidate onSubmit={this.handleAddSubmit}>
            <div className='form-group form-row'>
              <label
                className='col-md-2 col-form-label text-md-right'
                htmlFor='amt'
                readOnly>
                Amount
              </label>
              <div className='col-md-10'>
                <input
                  required
                  type='number'
                  className='form-control'
                  name='amt'
                  placeholder='Expense / Income Amount'
                  value={this.state.amt}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className='form-group form-row'>
              <label
                className='col-md-2 col-form-label text-md-right'
                htmlFor='amtType'>
                Type
              </label>
              <div className='col-md-10'>
                <select
                  class='form-control'
                  id='exampleFormControlSelect1'
                  onChange={this.handleChange}
                  name='amtType'
                  value={this.state.amtType}>
                  <option value='Expense'>Expense</option>
                  <option value='Income'>Income</option>
                </select>
              </div>
            </div>

            <div className='form-group form-row'>
              <label
                className='col-md-2 col-form-label text-md-right'
                htmlFor='amtDate'>
                Date
              </label>
              <div className='col-md-4'>
                <input
                  required
                  type='date'
                  className='form-control'
                  name='amtDate'
                  id='amtDate'
                  value={this.state.amtDate}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className='form-group form-row'>
              <label className='col-md-2 text-md-right' htmlFor='amtNotes'>
                Note
              </label>
              <div className='col-md-10'>
                <textarea
                  required
                  className='form-control'
                  rows='4'
                  cols='50'
                  name='amtNotes'
                  id='amtNotes'
                  placeholder='Note'
                  value={this.state.amtNotes}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className='form-group form-row mb-0'>
              <div className='offset-md-2 col-md-10'>
                <Button
                  color='primary'
                  variant='outlined'
                  type='submit'
                  className='d-block ml-auto'>
                  Add
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
