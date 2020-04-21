import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

  constructor(props) {
    super(props);

    this.state = {
        dish : props.dish
      }
  }

  renderDish(dish){
      if(dish != null){
          return(
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          );
      }
      else {
          return(
            <div></div>
          );
      }
  }

renderComments(comments){
  var dishComments = null;

    if(comments != null){
     dishComments = this.dish.comments.map((comment) => {
       return (
        <li key={comment.id}>
        <p>{comment.comment}</p>
        <p>{comment.author}, {comment.date}</p>
        </li>
        );
      });
    }
    else {
        return(
          <div></div>
        );
    }

    return (
      <div>
        <h3>Comments</h3>
        {dishComments}
      </div>
    )
  }

render() {
    return (
          <div className = "row">
            <div className="col-12 col-md-5 m-1">
              {this.renderDish(this.dish)}
            </div>
            <div className="col-12 col-md-5 m-1">
              {this.renderComments(this.dish)}
            </div>
          </div>
    );
  }

}

export default DishDetail;
