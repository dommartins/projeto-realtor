import React from 'react';
import './Button.scss';

export function ButtonsSmallBlack(props) {
    return (
        <React.Fragment>
            <button className="re-button-small-black">{props.description}</button>
        </React.Fragment>
    )
}

export function ButtonsDefaultBlack(props) {
    return (
        <React.Fragment>
            <button className="re-button-default-black">{props.description}</button>
        </React.Fragment>
    )
}

export function ButtonsLargeBlack(props) {
    return (
        <React.Fragment>
            <button className="re-button-large-black">{props.description}</button>
        </React.Fragment>
    )
}

export function ButtonsSmallWhite(props) {
    return (
        <React.Fragment>
            <button className="re-button-small-white shadow-sm">{props.description}</button>
        </React.Fragment>
    )
}

export function ButtonsDefaultWhite(props) {
    return (
        <React.Fragment>
            <button className="re-button-default-white shadow-sm">{props.description}</button>
        </React.Fragment>
    )
}

export function ButtonsLargeWhite(props) {
    return (
        <React.Fragment>
            <button className="re-button-large-white shadow-sm">{props.description}</button>
        </React.Fragment>
    )
}