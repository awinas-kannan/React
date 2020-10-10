import React from "react";


class RenderData extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {this.props.input.map(d => (
                    <li>{d}</li>
                ))}
            </ul>
        )
    }
}
class Department extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: ['Dev', 'Big Data', 'Mobility']
        };
    }
    render() {
        return (
            <div>
                <h2>Department List...</h2>

                {this.props.render(this.state.list)}

            </div>
        );
    }

}

class Project extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <h2>Projects List...</h2>

                {this.props.render(this.props.list)}

            </div>
        );
    }
}


export class RenderProp extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <React.Fragment>
                <Department render={(inp) => <RenderData input={inp}></RenderData>}></Department>
                <Project list={['P-1', 'P-2', 'P-3']} render={(inp) => <RenderData input={inp}></RenderData>}></Project>

                <Department render={this.renderMethod()}></Department>
                <Project list={['P-1', 'P-2', 'P-3']} render={this.renderMethod()}></Project>

                <Department render={this.renderMethodNew}></Department>
                <Project list={['P-1', 'P-2', 'P-3']} render={this.renderMethodNew}></Project>
            </React.Fragment>
        )
    }

    renderMethod() {
        return (inp) => <RenderData input={inp}></RenderData>;
    }

    renderMethodNew = (inp) => <RenderData input={inp}></RenderData>;
}

