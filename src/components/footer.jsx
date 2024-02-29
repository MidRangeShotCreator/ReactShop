function Footer() {
    return <footer className="page-footer teal lighten-2">
        <div className="footer-copyright">
            <div className="container">
                © {new Date().getFullYear()} Мельник В.Г. (ТКБО-02-22)
                <a className="grey-text text-lighten-4 right" href="https://github.com/MidRangeShotCreator/ReactShop">Repository</a>
            </div>
        </div>
    </footer>
}

export {Footer};