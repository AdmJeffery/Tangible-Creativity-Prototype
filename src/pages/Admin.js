import React from 'react'
import { Form } from 'reactstrap'

export default function Admin() {
    return (
        <div>
        <h1>Add Event</h1>
        <div class="form-group">
          <label for="">Event Title</label>
          <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="event name"></input>
          <small id="helpId" class="form-text text-muted">Help text</small>

          <label for="">Start Date</label>
          <input type="date" class="form-control" name="" id="" aria-describedby="helpId" placeholder=""></input>
          <small id="helpId" class="form-text text-muted">Help text</small>

          <label for="">End Date</label>
          <input type="date" class="form-control" name="" id="" aria-describedby="helpId" placeholder=""></input>
          <small id="helpId" class="form-text text-muted">Help text</small>

          <label for="">Description</label>
          <input type="text" class="form-control" name="" id="" aria-describedby="helpId" placeholder="Very cool crafting"></input>
          <small id="helpId" class="form-text text-muted">Help text</small>
        </div>
        </div>
    )
}