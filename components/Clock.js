import {Button, Col, Row} from "react-bootstrap";
import Countdown from "./Countdown";

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggle: 0
        };
    }

    handleToggle(next) {
        if (this.state.toggle < 2 && next) {
            this.setState({
                toggle: this.state.toggle + 1
            });
        } else if (this.state.toggle > 0 && !next) {
            this.setState({
                toggle: this.state.toggle - 1
            });
        }
    }

    render() {
        let row = '';

        if (this.state.toggle === 0) {
            row = '';
        }
        else if (this.state.toggle === 1) {
            row = '';
        }
        else if (this.state.toggle === 2) {
            row = '';
        }

        return (
            <div className="text-uppercase">
                {/*<h1 className="font-weight-light">Time passed since we've been together.</h1>*/}
                <Countdown
                    deadline="January, 02, 2019"
                />
                <Row className="mt-3">
                    <Col style={{fontSize: '1.5rem'}} className="text-right">
                        <Button disabled={this.state.toggle < 1} variant="outline-secondary"
                                onClick={this.handleToggle.bind(this, false)}>
                            &#x2190;
                        </Button>
                    </Col>
                    <Col style={{fontSize: '1.5rem'}} className="text-left">
                        <Button disabled={this.state.toggle > 1} variant="outline-secondary"
                                onClick={this.handleToggle.bind(this, true)}>
                            &#x2192;
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}
;

export default Clock;