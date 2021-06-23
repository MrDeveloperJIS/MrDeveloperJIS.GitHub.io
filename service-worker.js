const staticAssets = ["/", "/index.html", "/assets/css/fonts.css", "/assets/css/styles.css", "/service-worker.js", "/assets/js/bootstrap.bundle.min.js", "/assets/js/jquery.easing.min.js", "/assets/js/particles.min.js", "/assets/js/scrollspy.min.js", "/assets/js/dark-light-theme.min.js", "/assets/js/typed.init.js", "/assets/js/typed.min.js", "/assets/js/vanilla-tilt.min.js", "/assets/js/jquery-3.5.1.min.js", "/assets/js/app.min.js", "/assets/images/about-bg.svg", "/assets/images/about-bg-sm.svg", "/assets/images/footer-cloud.svg", "/404.html", "/assets/css/404.css", "/assets/js/404.js" ];
var cacheName = "cache-0";
self.addEventListener("install", function (event) {
    event.waitUntil(caches.open(cacheName).then(function (cache) {
        return cache.addAll(staticAssets)
    }))
});
self.addEventListener("fetch", function (event) {
    event.respondWith(caches.match(event.request).then(function (response) {
        if (response !== undefined) {
            return response
        } else {
            var requestClone = event.request.clone();
            return fetch(requestClone).then(function (response) {
                if (response.ok) {
                    let responseClone = response.clone();
                    caches.open(cacheName).then(function (cache) {
                        cache.put(event.request, responseClone)
                    });
                    return response
                }
            }).catch(function () {
                return caches.match("/")
            })
        }
    }))
});
self.addEventListener("message", function (event) {
    if (event.data.action === "skipWaiting") {
        self.skipWaiting()
    }
})