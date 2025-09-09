
import React from 'react';

function Maintenance() {
    return (
        <div className="container">
            <h2 className="mb-4">Maintenance</h2>
            
            <div className="table-container" style={{maxHeight: '300px', overflowY: 'auto'}}>
                <table className="table table-hover table-striped mb-0">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Transact No.</th>
                            <th scope="col">User</th>
                            <th scope="col">Date/Time</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Status</th>
                            <th scope="col">Purchase Info.</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Arancist</td>
                            <td>08/27/03</td>
                            <td>Arances</td>
                            <td><span className="badge bg-success">Completed</span></td>
                            <td>
                                <button className="btn btn-sm btn-light me-1">Details</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Arancist</td>
                            <td>08/27/03</td>
                            <td>Arances</td>
                            <td><span className="badge bg-success">Completed</span></td>
                            <td>
                                <button className="btn btn-sm btn-light me-1">Details</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Arancist</td>
                            <td>08/27/03</td>
                            <td>Arances</td>
                            <td><span className="badge bg-warning text-dark">Pending</span></td>
                            <td>
                                <button className="btn btn-sm btn-light me-1">Details</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>Arancist</td>
                            <td>08/27/03</td>
                            <td>Arances</td>
                            <td><span className="badge bg-success">Completed</span></td>
                            <td>
                                <button className="btn btn-sm btn-light me-1">Details</button> 
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>Arancist</td>
                            <td>08/27/03</td>
                            <td>Arances</td>
                            <td><span className="badge bg-danger">Cancelled</span></td>
                            <td>
                                <button className="btn btn-sm btn-light me-1">Details</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>Arancist</td>
                            <td>08/27/03</td>
                            <td>Arances</td>
                            <td><span className="badge bg-success">Completed</span></td>
                            <td>
                                <button className="btn btn-sm btn-light me-1">Details</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Maintenance;