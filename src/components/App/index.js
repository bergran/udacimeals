import React, { Component } from 'react'
import { connect } from 'react-redux';
import {addRecipe, removeFromCalendar} from '../../actions'

class App extends Component {

  render() {
    return (
      <div>
        Hello world
      </div>
    )
  }
}

const mapStateToProps = ({calendar, food}) => {
    const dayOrder = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

    return {
      calendar: dayOrder.map(day => ({
          day,
          meals: Object.keys(calendar[day]).reduce((meals, meal) => {
            meals[meal] =  calendar[day][meal] ?
                food[calendar[day][meal]] :
                null;
            return meals
          }, {})
      }))
    }
};

const mapDispatchToProps = dispatch => ({
    selectRecipe: data => dispatch(addRecipe(data)),
    remove: data => dispatch(removeFromCalendar(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(App)
