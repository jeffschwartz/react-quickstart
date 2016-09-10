/**
 * A semantic wrapper around bootstrap's css container
 */

const Container = ({children}) => (
    <div className="container">
        {children}
    </div>
);

export default Container;