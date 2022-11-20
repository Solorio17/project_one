import * as React from 'react';
import Layout from '../components/layout';
import './mystyles.scss'

const Menu = () => {
    return (
        <Layout>
            <section className='hero is-dark'>
                <div className='hero-body'>
                    <p className='title'> Our Menu</p>
                </div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>SERVING SIZE 12OZ</th>
                            <th>CALS</th>
                            <th>FAT</th>
                            <th>SUGAR</th>
                            <th>$</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>Caramel Machiatto</th>
                            <td>280</td>
                            <td>23</td>
                            <td>22g</td>
                            <td>4.80</td>
                        </tr>
                        <tr>
                            <th>Iced Matcha Latte</th>
                            <td>120</td>
                            <td>12</td>
                            <td>12g</td>
                            <td>5.20</td>
                        </tr>
                        <tr>
                            <th>Strawbearry Frappe</th>
                            <td>400</td>
                            <td>20</td>
                            <td>34g</td>
                            <td>5.80</td>
                        </tr>
                    </tbody>
                </table>
            </section>

        </Layout>
    )
};

export const Head = () => <title>Our Menu</title>


export default Menu;