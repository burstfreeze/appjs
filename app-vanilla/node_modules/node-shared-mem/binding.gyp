{
  "targets": [{
    "target_name": "node_shared_mem",
    "cflags!": [ "-fno-exceptions" ],
    "cflags_cc!": [ "-fno-exceptions" ],
    "sources": [
      "node-shared-mem.cc",
	    "addon.cc"
    ],
    "include_dirs": [
      "<!@(node -p \"require('node-addon-api').include\")"
    ],
    "conditions": [
        ["OS=='linux'", {
          "link_settings": {
              "libraries": [
                "-lrt"
                ]
          },
        }]
    ],
    'defines': [ 'NAPI_DISABLE_CPP_EXCEPTIONS' ],
  }]
}
