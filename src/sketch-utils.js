export function createNewDocument(context) {
  return context.api().newDocument()._object
}

export function getStoragePath(context) {
  // .sketchplugin/identifier.sketch
  return context.scriptPath.split('Contents/Sketch/')[0] + context.command.identifier() + '.sketch'
}

export function saveDocument(document, path) {
  const error = MOPointer.alloc().init()

  const url = NSURL.URLWithString(path)
  const oldUrl = NSURL.URLWithString('not used')

  document.writeToURL_ofType_forSaveOperation_originalContentsURL_error(url, 0, NSSaveToOperation, oldUrl, error)

  // TODO do something with the error
}

export function closeDocument(document) {
  document.close()
}

export function addLibrary(path) {
  const libUrl = NSURL.fileURLWithPath_(path)
  const libraryController = AppController.sharedInstance().librariesController()
  libraryController.addAssetLibraryAtURL_(libUrl)
}
