import path from 'path';
import webpack from 'webpack';

const Paths = {
    SRC: path.resolve(__dirname, '../src'),
    EXAMPLES: path.resolve(__dirname, '.')
};

export default {
    entry: path.join(Paths.EXAMPLES, 'main.js'),

    output: {
        path: Paths.EXAMPLES,
        filename: 'bundle.js'
    },

    plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress: {
            warnings: false
          }
        })
    ],

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel?stage=0&loose',
                include: [Paths.SRC, Paths.EXAMPLES]
            }
        ]
    }
};
