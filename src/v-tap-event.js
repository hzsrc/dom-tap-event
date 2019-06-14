import { setupDomTap } from './index';

export default {
  inserted: function (el, binding) {
    setupDomTap(el)
    if (binding.value) {
      el.addEventListener('tap', binding.value)
    }
  }
}
