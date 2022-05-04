import React from "react";
import "./main.css";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useTable } from 'react-table';

class CustomizedLabel extends React.Component {
    render() {
        const { x, y, index, payload } = this.props;
        if (this.props.points == null || this.props.points.length === 0) {
            return (
                <g>
                    <text x={x - 40} y={y} dy={3} fill="white" fontSize={15} textAnchor="end" >Loading</text>
                </g>
            );
        }

        return (
            <g>
                <text x={x - 40} y={y} dy={3} fill="white" fontSize={15} textAnchor="end" >{payload.value}</text>
                <image x={x - 30} y={y - 16} width={32} height={32} href={this.props.points[index].img}></image>
            </g>
        );
    }
}

function DataTable({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    if (columns == null || columns.length === 0) return (<p>Loading</p>)

    return (
        <table {...getTableProps()} className="m-auto">
            <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                        {headerGroup.headers.map(column => (
                            <th
                                {...column.getHeaderProps()}
                                style={{
                                    border: 'solid 1px gray',
                                    borderBottom: 'solid 3px white',
                                    color: 'white',
                                    background: '#2e2e2e',
                                    fontWeight: 'bold',
                                }}
                            >
                                {column.render('Header')}
                            </th>
                        ))}
                    </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map(row => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return (
                                    <td
                                        {...cell.getCellProps()}
                                        style={{
                                            padding: '10px',
                                            border: 'solid 1px gray',
                                            color: 'white',
                                            background: '#2e2e2e',
                                            textAlign: 'center',
                                        }}
                                    >
                                        {cell.render('Cell')}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

function getColorFromPercent(percent) {
    if (percent >= 0.9) {
        return '#388e3c';
    } else if (percent >= 0.75) {
        return '#66bb6a';
    } else if (percent >= 0.60) {
        return '#F6BE00';
    } else if (percent >= 0.40) {
        return '#CC6600';
    } else {
        return '#dc3545';
    }
}

class Main extends React.Component {
    state = {
        data: {},
        columns: [],
    };


    static getDerivedStateFromProps(nextProps, _prevState) {
        const temp = nextProps.data;
        if (temp.points != null) {
            temp.points.sort(function (a, b) {
                if (a.sum < b.sum) return 1;
                if (a.sum > b.sum) return -1;
                return 0;
            });

            let pointSum = 0;
            for (const item of nextProps.data.refs) {
                pointSum += item.maxpoints;
            }

            const columns = [
                {
                    Header: 'Név',
                    accessor: 'name',
                    Cell: ({ value }) => {
                        const img = nextProps.data.points.find(item => item.name === value)?.img;
                        return (<div className="d-flex flex-row align-items-center">
                            <p className="my-0" style={{ marginLeft: 0, marginRight: '5px' }}>{String(value)}</p>
                            <img alt="" src={img} style={{ height: '32px', width: '32px' }}></img>
                        </div>)
                    },
                },
                {
                    Header: 'Összpontszám',
                    accessor: 'sum',
                    Cell: ({ value }) => <p style={{ margin: 0, color: getColorFromPercent(value / pointSum) }}>{String(value) + "/" + pointSum}</p>,
                }
            ];

            for (const item of nextProps.data.refs) {
                const maxPoints = String(item.maxpoints);
                columns.push({
                    Header: item.name.substring(0, 15) + "...",
                    accessor: item.id,
                    Cell: ({ value }) => <p style={{ margin: 0, color: getColorFromPercent(value / maxPoints) }}>{String(value) + "/" + maxPoints}</p>,
                });
            }
            return { data: temp, columns };
        }
        return { data: {} };
    }

    render() {
        return (
            <div className="main mb-3">
                <ResponsiveContainer width="99%" height={500}>
                    <BarChart data={this.state.data.points} layout="vertical"
                        margin={{ right: 20, left: 20, bottom: 20 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" tick={{ fill: 'white' }} />
                        <YAxis type="category" width={180} dataKey="name" tick={<CustomizedLabel points={this.state.data.points} />} />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="sum" fill="#2ecc71" name="Pontok" />
                    </BarChart>
                </ResponsiveContainer>
                <div className="m-auto">
                    <DataTable columns={this.state.columns} data={this.state.data.points} />
                </div>
            </div>
        );
    }
}

export default Main;