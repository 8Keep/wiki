

module.exports.register = function registerJavadocLinkAttribute(registry) {
  registry.preprocessor(function () {
    this.process((doc, reader) => {
        const pageVersion = doc.getAttribute('page-version') || doc.getAttribute('page-component-version')
        doc.setAttribute('link-javadoc', `https://javadoc.jmonkeyengine.org/${pageVersion}`)      
        return reader
    })
  })
}
