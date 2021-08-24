initSidebarItems({"enum":[["ErrorKind","A list specifying general categories of I/O error."],["SeekFrom","Enumeration of possible methods to seek within an I/O object."]],"fn":[["copy","Asynchronously copies the entire contents of a reader into a writer."],["duplex","Create a new pair of `DuplexStream`s that act like a pair of connected sockets."],["empty","Creates a new empty async reader."],["reader_stream","Convert an `AsyncRead` implementor into a `Stream` of Result<`Bytes`, std::io::Error>."],["repeat","Creates an instance of an async reader that infinitely repeats one byte."],["sink","Creates an instance of an async writer which will successfully consume all data."],["split","Splits a single value implementing `AsyncRead + AsyncWrite` into separate `AsyncRead` and `AsyncWrite` handles."],["stream_reader","Convert a stream of byte chunks into an `AsyncRead`."]],"struct":[["BufReader","The `BufReader` struct adds buffering to any reader."],["BufStream","Wraps a type that is [`AsyncWrite`] and [`AsyncRead`], and buffers its input and output."],["BufWriter","Wraps a writer and buffers its output."],["Copy","A future that asynchronously copies the entire contents of a reader into a writer."],["DuplexStream","A bidirectional pipe to read and write bytes in memory."],["Empty","An async reader which is always at EOF."],["Error","The error type for I/O operations of the `Read`, `Write`, `Seek`, and associated traits."],["Lines","Stream for the `lines` method."],["PollEvented","Associates an I/O resource that implements the `std::io::Read` and/or `std::io::Write` traits with the reactor that drives it."],["ReadHalf","The readable half of a value returned from `split`."],["ReaderStream","Convert an `AsyncRead` implementor into a `Stream` of Result<`Bytes`, std::io::Error>. After first error it will stop. Additionally, this stream is fused: after it returns None at some moment, it is guaranteed that further `next()`, `poll_next()` and similar functions will instantly return None."],["Registration","Associates an I/O resource with the reactor instance that drives it."],["Repeat","An async reader which yields one byte over and over and over and over and over and…"],["Seek","Future for the `seek` method."],["Sink","An async writer which will move data into the void."],["Split","Stream for the `split` method."],["StreamReader","Convert a stream of byte chunks into an `AsyncRead`."],["Take","Stream for the `take` method."],["WriteHalf","The writable half of a value returned from `split`."]],"trait":[["AsyncBufRead","Reads bytes asynchronously."],["AsyncBufReadExt","An extension trait which adds utility methods to `AsyncBufRead` types."],["AsyncRead","Reads bytes from a source."],["AsyncReadExt","Reads bytes from a source."],["AsyncSeek","Seek bytes asynchronously."],["AsyncSeekExt","An extension trait which adds utility methods to `AsyncSeek` types."],["AsyncWrite","Writes bytes asynchronously."],["AsyncWriteExt","Writes bytes to a sink."]],"type":[["Result","A specialized `Result` type for I/O operations."]]});