Gem::Specification.new do |s|
  s.author = 'Scrivito'
  s.description = 'Make CodeMirror available as a Scrivito editor'
  s.email = 'info@scrivito.com'
  s.files = Dir['READ*', 'LIC*', 'app/**/*', 'lib/**/*', 'vendor/**/*']
  s.homepage = 'https://scrivito.com'
  s.license = 'MIT'
  s.name = 'scrivito_codemirror_editor'
  s.platform = Gem::Platform::RUBY
  s.required_ruby_version = '>= 1.9.3'
  s.summary = 'CodeMirror for Scrivito'
  s.version = '1.1.0'

  s.add_runtime_dependency 'scrivito', '~> 1.0'
end
