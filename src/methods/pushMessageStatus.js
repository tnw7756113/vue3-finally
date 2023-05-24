import emitter from '@/methods/emitter'

export default function (response, title = '更新', text = '') {
  if (response.data.success) {
    emitter.emit('push-message', {
      style: 'success',
      title: `${title}成功${text}`
    })
  } else {
    const message = typeof response.data.message === 'string' ? [response.data.message] : response.data.message
    emitter.emit('push-message', {
      style: 'danger',
      title: `${title}失敗`,
      content: message.join('、')
    })
  }
}
