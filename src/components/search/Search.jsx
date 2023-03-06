import React from 'react';
import './Search.scss';

export default function Search() {
    return (
        <React.Fragment>
            <div class="modal fade re-search modal-lg " id="re-search" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body p-3">
                            <input type="text" placeholder="Search for properties"/>
                            <button>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
