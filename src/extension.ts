import type { ExtensionContext } from 'vscode'
import { commands, window } from 'vscode'

export function activate(context: ExtensionContext) {
  const disposable = commands.registerCommand('extension.helloWorld', () => {
    window.showInformationMessage('Hello world!')
  })

  context.subscriptions.push(disposable)
}

export function deactivate() {}
