import React from "react"
import { Button } from "@chakra-ui/react"
import confetti from "canvas-confetti"

class OptionButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      optionName: props.name,
      answer: props.answer,
    }
  }

  render() {
    return (
      <Button
        colorScheme="pink"
        onClick={() =>
          this.giveFeedback(this.state.optionName, this.state.answer)
        }
        isFullWidth={true}
      >
        {this.state.optionName}
      </Button>
    )
  }

  giveFeedback(option, answer) {
    if (option === answer) {
      confetti({
        particleCount: 800,
        spread: 300,
        startVelocity: 40,
        gravity: 2,
        scalar: 0.8,
        ticks: 100,
      }).then(() => window.location.reload())
    }
  }
}

export default OptionButton
