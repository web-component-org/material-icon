import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'material-icon',
  styleUrl: 'material-icon.css',
  shadow: true
})
export class MaterialIcon {
  @Prop() name: string
  @Prop() size: string = 'sm'

  render() {
    return (
      <i
        class={`material-icons ${this.size}`}
      >
        {this.name}
      </i>
    )
  }
}
