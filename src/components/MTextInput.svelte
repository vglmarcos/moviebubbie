<script></script>

<input type="text" {...$$props}>

<style>

    input {
        background-color: transparent;
        border: 2px solid var(--light-blue);
        border-radius: 10px;
        outline: none;
        width: 100%;
        height: 54px;
        padding: 0px 15px;
        color: var(--light-blue);
        font-size: 18px;
        font-weight: 400;
    }
    
    input:focus {
        font-weight: bold;
        border: 3px solid var(--light-purple);
        color: var(--light-purple);
    }

    input::-webkit-input-placeholder {
        color: var(--light-blue);
    }

    input:focus::-webkit-input-placeholder {
        color:var(--light-purple);
    }

</style>
